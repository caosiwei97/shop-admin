import { ElForm } from 'element-plus'
import { FormItemRule } from 'element-plus/lib/components/form/src/form.type'

export type IElform = InstanceType<typeof ElForm>
export type IElFormRule = Record<string, FormItemRule[]>
