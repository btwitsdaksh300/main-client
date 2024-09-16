const defaultFruits = [
    { id: 1, name: 'Apple', color: 'Red', description: 'A sweet red fruit.' },
    { id: 2, name: 'Banana', color: 'Yellow', description: 'A long yellow fruit.' },
    { id: 3, name: 'Orange', color: 'Orange', description: 'A juicy orange fruit.' }
];

export const getFruits = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(defaultFruits);
        }, 1000); // Simulate network delay
    });
};
