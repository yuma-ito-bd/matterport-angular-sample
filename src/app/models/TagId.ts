export class TagId {
    constructor(public readonly value: string) {
        if (!value) {
            throw new Error('value is invalid.');
        }
    }

    equals(id: TagId): boolean {
        return this.value === id.value;
    }
}
