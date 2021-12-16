import { ElForm, ElDialog } from 'element-plus'
import { FormItemRule } from 'element-plus/lib/components/form/src/form.type'

export type IElForm = InstanceType<typeof ElForm>
export type IElDialog = InstanceType<typeof ElDialog>
export type IElFormRule = Record<string, FormItemRule[]>
