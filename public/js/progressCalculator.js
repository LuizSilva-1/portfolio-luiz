// public/js/progressCalculator.js
import skillsData from './skillsData.js';

function calculateProgress(skillsData) {
    const maxProjects = Math.max(...Object.values(skillsData)); // Determina o maior número de projetos
    const progressValues = {};

    for (const [skill, projectCount] of Object.entries(skillsData)) {
        progressValues[skill] = Math.round((projectCount / maxProjects) * 100);
    }
    return progressValues;
}

export default calculateProgress;
