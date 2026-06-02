document.addEventListener('DOMContentLoaded', () => {
    const contacts = document.querySelectorAll('[data-contact-link]');
    const user = 'apexpsf';
    const domain = 'gmail';
    const tld = 'com';
    const address = `${user}@${domain}.${tld}`;

    contacts.forEach((contact) => {
        contact.href = `mailto:${address}`;
        contact.textContent = address;
        contact.removeAttribute('aria-disabled');
    });
});
