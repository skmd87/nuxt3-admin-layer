import type { SnackbarItem, SnackbarFn } from '../types/Snackbar'
declare module '#app' {
    interface NuxtApp {
        $snackbar: SnackbarFn;
    }
}
declare module '#NuxtEvents' {
    interface Events {
        'snackbar': SnackbarItem;
    }
}
export default defineNuxtPlugin(() => {
    const { emit } = useEvents()

    const snackbar: SnackbarFn = (item: SnackbarItem) => {
        emit('snackbar', item)
    }
    return {
        provide: {
            snackbar,
        },
    }
})
