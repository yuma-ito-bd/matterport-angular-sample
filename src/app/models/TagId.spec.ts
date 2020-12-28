import { TagId } from './TagId';

describe('TagId test', () => {
    describe('コンストラクタ', () => {
        it('正常系', () => {
            const id = 'test-id';
            const result = new TagId(id);
            expect(result.value).toBe(id);
        });

        it('空文字はエラーを投げる', () => {
            expect(() => {
                const result = new TagId('');
            }).toThrow(new Error('value is invalid.'));
        });
    });

    describe('equals', () => {
        it('valueが同じ場合、同じとみなす', () => {
            const id1 = new TagId('test-id');
            const id2 = new TagId('test-id');
            expect(id1.equals(id2)).toBeTrue();
        });
        it('valueが違う場合、違うとみなす', () => {
            const id1 = new TagId('test-id');
            const id2 = new TagId('other-id');
            expect(id1.equals(id2)).toBeFalse();
        });
    });
});
