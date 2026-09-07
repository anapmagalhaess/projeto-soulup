document.addEventListener('DOMContentLoaded', () => {

    // === CONSTANTES DE PONTOS INICIAIS DO PERFIL ===
    const PROFILE_BASE_POINTS = 50;

    // === ELEMENTOS DA CALCULADORA ===
    const inputDistance = document.getElementById('input-distance');
    const inputPet = document.getElementById('input-pet');
    const inputAlum = document.getElementById('input-alum');
    const inputEnergy = document.getElementById('input-energy');
    const inputFood = document.getElementById('input-food');

    const badgeDistance = document.getElementById('badge-distance');
    const badgePet = document.getElementById('badge-pet');
    const badgeAlum = document.getElementById('badge-alum');
    const badgeEnergy = document.getElementById('badge-energy');
    const badgeFood = document.getElementById('badge-food');

    const valPoints = document.getElementById('val-points');
    const calcCo2 = document.getElementById('calc-co2');
    const calcWater = document.getElementById('calc-water');
    const calcTrees = document.getElementById('calc-trees');

    // === PRESETS POR TIER ===
    const btnVerde = document.getElementById('preset-verde');
    const btnPrata = document.getElementById('preset-prata');
    const btnOuro = document.getElementById('preset-ouro');

    // === BASE DE RECOMPENSAS SIMULADAS ===
    const rewardsData = [
        {
            title: "Cupom R$20 no EcoMarket",
            desc: "Desconto em feiras de produtos orgânicos e artesanais locais.",
            cost: 150,
            icon: "fa-solid fa-store"
        },
        {
            title: "Plantio de 1 Mudas em seu Nome",
            desc: "Dedicamos 1 árvore na Reserva de Reflorestamento parceira.",
            cost: 350,
            icon: "fa-solid fa-tree"
        },
        {
            title: "20% OFF em Bicicletas Elétricas",
            desc: "Cupom válido nas maiores redes de mobilidade da cidade.",
            cost: 650,
            icon: "fa-solid fa-bicycle"
        },
        {
            title: "Passaporte Festival Verde 2026",
            desc: "Ingresso VIP para a conferência de sustentabilidade da Soul Up.",
            cost: 1200,
            icon: "fa-solid fa-ticket"
        }
    ];

    // === DADOS DO RANKING MENSAL (RESETADO p MÊS) ===
    // - Tier Verde 🌱: 0 a 2.999 pts
    // - Tier Prata 🛡️: 3.000 a 5.499 pts (mínimo 3.000 pts)
    // - Tier Ouro: 5.500+ pts

    //dicionario de info
    const monthlyLeaderboardData = [
        { pos: 1, name: "Lucas Andrade", avatar: "LA", actions: 148, co2: "112.5 kg", points: 6890, tier: "Ouro 👑", tierClass: "tier-ouro" },
        { pos: 2, name: "Camila Rocha", avatar: "CR", actions: 124, co2: "96.0 kg", points: 5640, tier: "Ouro 👑", tierClass: "tier-ouro" },
        { pos: 3, name: "Gabriel Martins", avatar: "GM", actions: 98, co2: "74.5 kg", points: 4250, tier: "Prata 🛡️", tierClass: "tier-prata" },
        { pos: 4, name: "Beatriz Lima", avatar: "BL", actions: 89, co2: "68.8 kg", points: 3980, tier: "Prata 🛡️", tierClass: "tier-prata" },
        { pos: 5, name: "Juliana Paes", avatar: "JP", actions: 76, co2: "54.0 kg", points: 3240, tier: "Prata 🛡️", tierClass: "tier-prata" },
        { pos: 6, name: "Fernando Souza", avatar: "FS", actions: 58, co2: "42.1 kg", points: 2210, tier: "Verde 🌱", tierClass: "tier-verde" },
        { pos: 7, name: "Mariana Costa", avatar: "MC", actions: 45, co2: "31.5 kg", points: 1450, tier: "Verde 🌱", tierClass: "tier-verde" },
        { pos: 8, name: "Rodrigo Silva", avatar: "RS", actions: 39, co2: "26.0 kg", points: 820, tier: "Verde 🌱", tierClass: "tier-verde" }
    ];

    // === LÓGICA DE CÁLCULO ===
    function calculateImpact() {
        const distance = parseInt(inputDistance.value) || 0;
        const pet = parseInt(inputPet.value) || 0;
        const alum = parseInt(inputAlum.value) || 0;
        const energy = parseInt(inputEnergy.value) || 0;
        const food = parseInt(inputFood.value) || 0;

        // Atualizar textos dos Badges dos Sliders
        if (badgeDistance) badgeDistance.textContent = `${distance} km/semana`;
        if (badgePet) badgePet.textContent = `${pet} unid./semana`;
        if (badgeAlum) badgeAlum.textContent = `${alum} unid./semana`;
        if (badgeEnergy) badgeEnergy.textContent = `${energy} kWh/mês`;
        if (badgeFood) badgeFood.textContent = `${food} ref./semana`;

        // Fórmula de Pontos (Pontos Iniciais do Perfil + Ações Simuladas)
        const simulatedPoints = Math.round(
            (distance * 12) +
            (pet * 4) +
            (alum * 6) +
            (energy * 3) +
            (food * 15)
        );
        const totalPoints = PROFILE_BASE_POINTS + simulatedPoints;

        // CO2 Evitado (kg)
        const totalCo2 = (
            (distance * 0.18) +
            (pet * 0.045) +
            (alum * 0.08) +
            (energy * 0.12) +
            (food * 0.5)
        );

        // Água Salva (Litros)
        const totalWater = Math.round(
            (pet * 3) +
            (alum * 5) +
            (food * 20) +
            (energy * 2)
        );

        // Árvores Equivalentes (Mudas)
        const totalTrees = (totalCo2 / 20).toFixed(1);

        // Atualizar UI dos Resultados
        if (valPoints) valPoints.textContent = totalPoints.toLocaleString('pt-BR');
        if (calcCo2) calcCo2.textContent = `${totalCo2.toFixed(2).replace('.', ',')} kg`;
        if (calcWater) calcWater.textContent = `${totalWater} L`;
        if (calcTrees) calcTrees.textContent = `${totalTrees} mudas`;

        // Atualizar Simulador de Recompensas
        renderRewards(totalPoints);
    }

    // === RENDERIZAR RECOMPENSAS SIMULADAS ===
    function renderRewards(points) {
        const container = document.getElementById('rewards-container');
        if (!container) return;

        container.innerHTML = rewardsData.map(r => {
            const isUnlocked = points >= r.cost;
            const progress = Math.min(100, Math.round((points / r.cost) * 100));

            return `
                <div class="reward-card">
                    <span class="reward-badge-status ${isUnlocked ? 'status-unlocked' : 'status-locked'}">
                        ${isUnlocked ? '<i class="fa-solid fa-check"></i> Desbloqueado' : `<i class="fa-solid fa-lock"></i> Faltam ${r.cost - points} pts`}
                    </span>
                    <div class="reward-icon"><i class="${r.icon}"></i></div>
                    <h3>${r.title}</h3>
                    <p>${r.desc}</p>
                    <div class="reward-cost">
                        <i class="fa-solid fa-coins"></i> ${r.cost} SoulTokens
                    </div>
                    <div class="reward-progress-mini">
                        <div class="reward-progress-fill" style="width: ${progress}%;"></div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // === ATALHOS DE PRESETS POR TIER ===
    if (btnVerde) {
        btnVerde.addEventListener('click', () => {
            inputDistance.value = 10;
            inputPet.value = 20;
            inputAlum.value = 10;
            inputEnergy.value = 40;
            inputFood.value = 5;
            calculateImpact();
        });
    }

    if (btnPrata) {
        btnPrata.addEventListener('click', () => {
            inputDistance.value = 45;
            inputPet.value = 80;
            inputAlum.value = 50;
            inputEnergy.value = 190;
            inputFood.value = 16;
            calculateImpact();
        });
    }

    if (btnOuro) {
        btnOuro.addEventListener('click', () => {
            inputDistance.value = 80;
            inputPet.value = 120;
            inputAlum.value = 100;
            inputEnergy.value = 260;
            inputFood.value = 21;
            calculateImpact();
        });
    }

    // === RENDERIZAR RANKING MENSAL ===
    function renderLeaderboard() {
        const tbody = document.getElementById('leaderboard-tbody');
        if (!tbody) return;

        tbody.innerHTML = monthlyLeaderboardData.map(item => `
            <tr>
                <td><span class="rank-pos ${item.pos <= 3 ? 'pos-' + item.pos : 'pos-other'}">${item.pos <= 3 ? (item.pos === 1 ? '🥇' : item.pos === 2 ? '🥈' : '🥉') : `#${item.pos}`}</span></td>
                <td>
                    <div class="user-cell">
                        <span class="user-avatar">${item.avatar}</span>
                        <span>${item.name}</span>
                    </div>
                </td>
                <td><strong>${item.actions}</strong> atitudes</td>
                <td>${item.co2}</td>
                <td><strong style="color: var(--cor-coral);"><i class="fa-solid fa-coins"></i> ${item.points.toLocaleString('pt-BR')}</strong></td>
                <td><span class="calc-badge ${item.tierClass}">${item.tier}</span></td>
            </tr>
        `).join('');
    }

    // === LISTENERS DOS INPUTS DA CALCULADORA ===
    [inputDistance, inputPet, inputAlum, inputEnergy, inputFood].forEach(input => {
        if (input) {
            input.addEventListener('input', calculateImpact);
        }
    });

    // === INICIALIZAÇÃO ===
    calculateImpact();
    renderLeaderboard();
});