// 國家代碼表 https://www.cbc.gov.tw/public/attachment/83189591771.pdf
// 各國語系代碼表 https://hoohoo.top/blog/national-language-code-table-zh-tw-zh-cn-en-us-json-format/
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import zh_tw_Json from "../locales/zh_TW.json";
import vi_Json from "../locales/vi.json";
import en_Json from "../locales/en.json";
import ja_Json from "../locales/ja.json";
import id_Json from "../locales/id.json";
import ph_Json from "../locales/ph.json";
import th_Json from "../locales/th.json";

const resources = {
	zh: { ...zh_tw_Json },
	vi: { ...vi_Json },
	en: { ...en_Json },
	ja: { ...ja_Json },
	id: { ...id_Json },
	fil: { ...ph_Json },
	th: { ...th_Json },
};

const defaultLanguage = "zh-TW";
const detectedLanguage = (localStorage.getItem("selectedLanguage") || navigator.language || defaultLanguage).split(
	"-"
)[0];

i18n.use(initReactI18next).init({
	lng: detectedLanguage,
	fallbackLng: defaultLanguage,
	resources: { ...resources },
	interpolation: {
		// 是否要讓字詞 escaped 來防止 xss 攻擊，因為 React.js 已經做了就設成 false 即可
		escapeValue: false,
	},
});
