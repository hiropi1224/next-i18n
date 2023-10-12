import 'server-only';

// 辞書の型を定義
type Dictionary = {
  [key: string]: { [key: string]: string };
};

// 辞書のインポート関数の型を定義
type DictionaryImportFunction = () => Promise<Dictionary>;

const dictionaries: Record<string, DictionaryImportFunction> = {
  ja: () => import('@/dictionaries/ja.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
};

export const getDictionaries = async (locale: string) => dictionaries[locale]();
