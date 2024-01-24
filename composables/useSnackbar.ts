export function useSnackbar() {
    const { $snackbar } = useNuxtApp()
    return $snackbar
}
