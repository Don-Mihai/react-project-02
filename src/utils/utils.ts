export function showNotification(message: string, type = 'info', duration = 5000) {
    const notification = document.createElement('div');
    notification.className = `notification hideModal notification__${type}`;
    notification.innerHTML = `<div class="notification-message">${message}</div>
                              <div class="notification__close">&times;</div>`;

    const body: any = document.querySelector('body');
    body.appendChild(notification);

    let id: any;
    // удаляет всплывашку
    const closeNotification = () => {
        body.removeChild(notification);
    };

    const closeBtn: any = notification.querySelector('.notification__close');
    closeBtn.addEventListener('click', closeNotification);

    notification.classList.add('show');
    id = setTimeout(closeNotification, duration);

    notification.onmouseover = () => {
        clearTimeout(id);
        notification.classList.remove('hideModal');
    };

    notification.onmouseout = () => {
        notification.classList.add('show');
        id = setTimeout(closeNotification, duration);

        notification.classList.add('hideModal');
    };
}
