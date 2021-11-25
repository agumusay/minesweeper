import { emptyFieldGenerator, CellState, fieldGenerator } from './Field';
const { empty, bomb, hidden } = CellState;

describe('Field Generator', () => {
	describe('emptyFieldGenerator Tests', () => {
		it('2×2', () => {
			expect(emptyFieldGenerator(2)).toStrictEqual([
				[empty, empty],
				[empty, empty],
			]);
		});
		it('3×3', () => {
			expect(emptyFieldGenerator(3)).toStrictEqual([
				[empty, empty, empty],
				[empty, empty, empty],
				[empty, empty, empty],
			]);
		});
		it('3×3 with hidden state', () => {
			expect(emptyFieldGenerator(3, hidden)).toStrictEqual([
				[hidden, hidden, hidden],
				[hidden, hidden, hidden],
				[hidden, hidden, hidden],
			]);
		});
	});
	describe('Simple cases', () => {
		it('has wrong density', () => {
			const errorText = 'Probability should be between 0 and 1';
			expect(() => fieldGenerator(1, -1)).toThrow(errorText);
			expect(() => fieldGenerator(1, 2)).toThrow(errorText);
		});
		it("'s smallest possible field without mine", () => {
			expect(fieldGenerator(1, 0)).toStrictEqual([[empty]]);
		});
		it('s Biggest field without mine', () => {
			expect(fieldGenerator(10, 0)).toStrictEqual([
				[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
			]);
		});
		it("'s smallest possible field with mine", () => {
			expect(fieldGenerator(1, 1)).toStrictEqual([[bomb]]);
		});
		it('has 2×2 field with mines', () => {
			expect(fieldGenerator(2, 1)).toStrictEqual([
				[bomb, bomb],
				[bomb, bomb],
			]);
		});
		it('has 2×2 field with 50% probablity', () => {
			const field = fieldGenerator(2, 0.5);
			const flatField = field.flat();

			const cellsWithBombs = flatField.filter(cell => cell === bomb);
			const emptyCells = flatField.filter(cell => cell === empty);

			expect(emptyCells).toHaveLength(2);
			expect(cellsWithBombs).toHaveLength(2);

			expect(fieldGenerator(4, 0.5)).toStrictEqual([
				[bomb, bomb, bomb, bomb],
				[bomb, bomb, bomb, bomb],
				[empty, empty, empty, empty],
				[empty, empty, empty, empty],
			]);
		});
	});
});
