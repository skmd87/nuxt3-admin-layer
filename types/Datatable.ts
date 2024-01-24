import type { InjectionKey } from 'vue'
import Datatable from '../components/Datatable.vue'
import type { ComponentProps } from './Helpers'

export type DatatableProps = ComponentProps<typeof Datatable>

export type DatatableDefaults = Partial<DatatableProps>

export const DatatableDefaultsSymbol: InjectionKey<DatatableDefaults> = Symbol('DatatableDefaults')
