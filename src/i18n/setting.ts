export const defaultLanguage = 'ja'
export const availableLanguages = [defaultLanguage, 'en']

export const namespaces = ['home']

export function getOptions(lng = defaultLanguage) {
  return {
    lng,
    defaultNS: defaultLanguage,
    fallbackLng: defaultLanguage,
    fallbackNS: namespaces,
    ns: namespaces,
    supportedLngs: availableLanguages,
  }
}
