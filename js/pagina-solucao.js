document.addEventListener('DOMContentLoaded', () => {

    const inputDistance = document.getElementById('input-distance');
    const inputPet = document.getElementById('input-pet');
    const inputAlum = document.getElementById('input-alum');
    const inputEnergy = document.getElementById('input-energy');

    const badgeDistance = document.getElementById('badge-distance');
    const badgePet = document.getElementById('badge-pet');
    const badgeAlum = document.getElementById('badge-alum');
    const badgeEnergy = document.getElementById('badge-energy');

    const calcPoints = document.getElementById('calc-points');
    const calcCo2 = document.getElementById('calc-co2');

    function updateCalculations() {

        const distance = inputDistance.value;
        const pet = inputPet.value;
        const alum = inputAlum.value;
        const energy = inputEnergy.value;

        badgeDistance.textContent = `${distance} km`;
        badgePet.textContent = `${pet} garrafas`;
        badgeAlum.textContent = `${alum} latas`;
        badgeEnergy.textContent = `${energy} kWh`;

        const totalPoints =
            (distance * 0.5) +
            (pet * 0.2) +
            (alum * 0.15) +
            (energy * 0.08);

        const totalCo2 =
            (distance * 0.02) +
            (pet * 0.004) +
            (alum * 0.006) +
            (energy * 0.01);

        calcPoints.innerHTML =
            `<i class="fa-solid fa-coins"></i> ${Math.floor(totalPoints)}`;

        calcCo2.innerHTML =
            `<i class="fa-solid fa-tree"></i> ${totalCo2.toFixed(2).replace('.', ',')} kg`;
    }

    inputDistance.addEventListener('input', updateCalculations);
    inputPet.addEventListener('input', updateCalculations);
    inputAlum.addEventListener('input', updateCalculations);
    inputEnergy.addEventListener('input', updateCalculations);

    updateCalculations();
});