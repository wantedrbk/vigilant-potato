import { classNames } from './classNames';

describe('classNames', () => {
    test('should return the correct class names', () => {
        const cls = 'button';
        const mods = { active: true, disabled: false };
        const additional = ['primary', 'large'];
    
        const result = classNames(cls, mods, additional);
    
        expect(result).toBe('button primary large active');
    });
  
    test('should ignore falsy values in the additional array', () => {
        const cls = 'button';
        const mods = { active: true, disabled: false };
        const additional = ['primary', '', null, undefined];
    
        const result = classNames(cls, mods, additional);
    
        expect(result).toBe('button primary active');
    });
  
    test('should ignore falsy values in the mods object', () => {
        const cls = 'button';
        const mods = { active: true, disabled: false, hidden: false};
        const additional = ['primary', 'large'];
    
        const result = classNames(cls, mods, additional);
    
        expect(result).toBe('button primary large active');
    });
});