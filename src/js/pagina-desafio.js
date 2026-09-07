document.addEventListener('DOMContentLoaded', () => {
    // === ELEMENTOS DO FILTRO E CARDS DE DESAFIO ===
    const filterButtons = document.querySelectorAll('.filter-btn');
    const challengeCards = document.querySelectorAll('.challenge-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');

            challengeCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (category === 'all' || cardCategory === category) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // === BOTÃO INICIAR DESAFIO ===
    const startButtons = document.querySelectorAll('.challenge-btn');
    const challengeSelect = document.getElementById('challenge-select');
    const simulatorSection = document.getElementById('simulator');

    startButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.challenge-card');
            const challengeId = card ? card.getAttribute('data-id') : null;

            if (challengeSelect && challengeId) {
                challengeSelect.value = challengeId;
            }

            if (simulatorSection) {
                simulatorSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // === SIMULADOR DE AUDITORIA POR IA ===
    const simulatorForm = document.getElementById('simulator-form');
    const actionFile = document.getElementById('action-file');
    const fileLabel = document.getElementById('file-label');
    const submitBtn = document.getElementById('submit-btn');

    const displayDefaultText = document.getElementById('display-default-text');
    const displaySpinner = document.getElementById('display-spinner');
    const progressFill = document.getElementById('progress-fill');
    const spinnerLabel = document.getElementById('spinner-label');
    const successScreen = document.getElementById('display-success-screen');
    const successPoints = document.getElementById('success-points');
    const resetBtn = document.getElementById('reset-btn');

    if (actionFile) {
        actionFile.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                const fileName = e.target.files[0].name;
                fileLabel.innerHTML = `<i class="fa-solid fa-file-circle-check" style="color: #41c6c4;"></i> <strong>${fileName}</strong><br><span style="font-size: 11.5px; color: #206f74;">Comprovante carregado com sucesso!</span>`;
                fileLabel.style.borderColor = '#41c6c4';
                fileLabel.style.background = '#EAFBF9';
            } else {
                resetFileLabel();
            }
        });
    }

    function resetFileLabel() {
        if (fileLabel) {
            fileLabel.innerHTML = `<i class="fa-solid fa-cloud-arrow-up"></i> Tire uma foto ou envie uma imagem<br><span>(Formatos aceitos: JPG, PNG)</span>`;
            fileLabel.style.borderColor = 'var(--cor-azul-bebe)';
            fileLabel.style.background = '#F5FDFD';
        }
    }

    function typeWriter(element, text, speed = 20, callback) {
        element.textContent = '';
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                if (callback) callback();
            }
        }, speed);
    }

    if (simulatorForm) {
        simulatorForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (!challengeSelect.value) {
                alert('Por favor, selecione um desafio para validar.');
                return;
            }
            if (!actionFile.files || actionFile.files.length === 0) {
                alert('Por favor, envie um arquivo de foto ou comprovação.');
                return;
            }

            submitBtn.disabled = true;

            const selectedOption = challengeSelect.options[challengeSelect.selectedIndex];
            const points = selectedOption.getAttribute('data-points') || '100';

            if (displayDefaultText) {
                displayDefaultText.style.display = 'none';
            }

            displaySpinner.style.display = 'flex';

            runTerminalSimulation(points);
        });
    }

    function runTerminalSimulation(points) {
        let progress = 0;

        const logs = [
            "Conectando com o servidor de visão computacional (soulup-ai v1.0.4)...",
            "Analisando metadados EXIF da imagem de comprovação...",
            "Validando geolocalização e carimbo de tempo contra fraudes... [OK]",
            "Executando rede neural profunda para detecção de padrões verdes...",
            "Atitude sustentável classificada com sucesso! Registrando pontuação..."
        ];

        const progressInterval = setInterval(() => {
            progress += 1;
            if (progressFill) {
                progressFill.style.width = `${progress}%`;
            }

            if (progress === 10) {
                typeWriter(spinnerLabel, logs[0]);
            } else if (progress === 30) {
                typeWriter(spinnerLabel, logs[1]);
            } else if (progress === 50) {
                typeWriter(spinnerLabel, logs[2]);
            } else if (progress === 70) {
                typeWriter(spinnerLabel, logs[3]);
            } else if (progress === 90) {
                typeWriter(spinnerLabel, logs[4]);
            }

            if (progress >= 100) {
                clearInterval(progressInterval);

                setTimeout(() => {
                    displaySpinner.style.display = 'none';
                    if (successScreen) {
                        successScreen.style.display = 'flex';
                    }
                    if (successPoints) {
                        successPoints.textContent = `+${points} Pontos Soul`;
                    }
                }, 500);
            }
        }, 30);
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            simulatorForm.reset();
            resetFileLabel();

            if (successScreen) {
                successScreen.style.display = 'none';
            }
            if (displayDefaultText) {
                displayDefaultText.style.display = 'block';
            }
            if (progressFill) {
                progressFill.style.width = '0%';
            }
            submitBtn.disabled = false;
        });
    }
});
