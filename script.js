document.addEventListener('DOMContentLoaded', () => {
    const activityNameElement = document.getElementById('activity-name');
    const activityLinkElement = document.getElementById('activity-link');
    const randomizeButton = document.getElementById('randomize-button');

    let activities = [];

    fetch('randomizers.json')
        .then(response => response.json())
        .then(data => {
            activities = data;
            randomizeActivity();
        });

    function randomizeActivity() {
        if (activities.length > 0) {
            const randomIndex = Math.floor(Math.random() * activities.length);
            const activity = activities[randomIndex];
            activityNameElement.textContent = activity.name;
            activityLinkElement.href = activity.link;
            activityLinkElement.textContent = `Go to ${activity.name} randomizer`;
        }
    }

    randomizeButton.addEventListener('click', randomizeActivity);
});
