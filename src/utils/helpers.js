// src/utils/helpers.js

export const isExpired = (expiryDate) => {
    const today = new Date();
    const exp = new Date(expiryDate);
    return today > exp;
};

export const makeDay = (id, category, title, ruleJa, Translations, phrases, vocab, quizInput, optionalAOrImage, imageSource) => {
    const safeTranslations = Translations || {};
    const safePhrases = phrases || [];
    const safeVocab = vocab || [];
    const safeQuizInput = quizInput || {};

    let quiz, image;
    if (typeof optionalAOrImage === 'object' && optionalAOrImage.q) {
        quiz = optionalAOrImage;
        image = imageSource;
    } else {
        quiz = safeQuizInput;
        image = optionalAOrImage;
    }

    return {
        id,
        category,
        title,
        ruleJa,
        translations: safeTranslations,
        phrases: safePhrases,
        vocab: safeVocab,
        quiz,
        image,
    };
};
