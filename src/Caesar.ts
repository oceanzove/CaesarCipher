

class Caesar {

    public CaesarCipher = (text: string, shift: number): string => {
        // Преобразуем текст в верхний регистр, чтобы упростить работу с символами
        const upperCaseText = text.toUpperCase();
        let result = "";

        for (let i = 0; i < upperCaseText.length; i++) {
            // Получаем ASCII код текущего символа
            const charCode = upperCaseText.charCodeAt(i);

            if (charCode >= 65 && charCode <= 90) {
                // Если символ является буквой алфавита, то шифруем его
                result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
            }
            else {
                // Если символ не является буквой алфавита, то оставляем его без изменений
                result += upperCaseText.charAt(i);
            }
        }

        return result;
    };

    public CaesarDecipher = (text: string, shift: number): string => {
        const upperCaseText = text.toUpperCase();
        let result = "";

        for (let i = 0; i < upperCaseText.length; i++){
            const charCode = upperCaseText.charCodeAt(i)

            if (charCode >= 65 && charCode <= 90) {
                result += String.fromCharCode(((charCode - 65 - shift) % 26) + 65);
            }
            else {
                result += upperCaseText.charAt(i);
            }
        }
        return result;
    };
}

export default Caesar;
