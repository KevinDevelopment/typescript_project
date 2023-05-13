export function validateEmail(email: string): boolean {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
}

