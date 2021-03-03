const i18nStrings = {
    fr: {
        'about': 'Page à propos',
        'history': 'Historique',
        'type_search_msg': 'Saisissez le nom d\'un titre pour rechercher un film.',
        'type_title_hint': 'Saisissez un titre',
        'close': 'Fermer',
        'home': 'Accueil',
        'about_menu_title': 'A propos',
        'my_search_is': 'Ma recherche est',
        'add_favorite': 'Ajouter aux favoris',
        'delete_favorite': 'Supprimer des favoris'
    }
}

export default {
    install: (app) => {
        app.config.globalProperties.$lang = 'fr'

        app.config.globalProperties.$translate = (key) => {
            return key.split('.')
                .reduce((o, i) => { if (o) return o[i] }, i18nStrings[app.config.globalProperties.$lang])
        }

        app.provide('i18n', i18nStrings)
    }
}