document.addEventListener('DOMContentLoaded', () => {
    const inputDistance = document.getElementById('input-distance');
    const inputPet = document.getElementById('input-pet');
    const inputAlum = document.getElementById('input-alum');
    const inputEnergy = document.getElementById('input-energy');

    const calcPoints = document.getElementById('calc-points');
    const calcCo2 = document.getElementById('calc-co2');

    function updateCalculations() {
        const distance = parseFloat(inputDistance.value) || 0;
        const pet = parseInt(inputPet.value) || 0;
        const alum = parseInt(inputAlum.value) || 0;
        const energy = parseFloat(inputEnergy.value) || 0;

        // Fórmulas de acúmulo de Pontos Soul:
        // - Cada 1 km caminhado/pedalado = 25 Pontos Soul
        // - Cada 1 Garrafa PET reciclada = 20 Pontos Soul
        // - Cada 1 Lata de Alumínio reciclada = 15 Pontos Soul
        // - Cada 1 kWh de energia gerada/economizada = 30 Pontos Soul
        const totalPoints = (distance * 25) + (pet * 20) + (alum * 15) + (energy * 30);

        // Fórmulas de redução aproximada de CO2 (em kg de emissão evitada):
        // - 1 km sustentável evita ~0.12 kg de CO2 (comparado a veículo de combustão)
        // - 1 Garrafa PET reciclada evita ~0.05 kg de CO2 (economia circular)
        // - 1 Lata de Alumínio reciclada evita ~0.09 kg de CO2 (alta economia industrial)
        // - 1 kWh limpo (solar/eólico) evita ~0.35 kg de CO2
        const totalCo2 = (distance * 0.12) + (pet * 0.05) + (alum * 0.09) + (energy * 0.35);

        if (calcPoints) {
            calcPoints.textContent = Math.round(totalPoints).toLocaleString('pt-BR');
        }
        if (calcCo2) {
            calcCo2.textContent = `${totalCo2.toFixed(2).replace('.', ',')} kg`;
        }
    }

    const allInputs = [inputDistance, inputPet, inputAlum, inputEnergy];
    allInputs.forEach(input => {
        if (input) {
            input.addEventListener('input', updateCalculations);
            input.addEventListener('change', () => {
                if (parseFloat(input.value) < 0) {
                    input.value = 0;
                    updateCalculations();
                }
            });
        }
    });

    updateCalculations();
});
