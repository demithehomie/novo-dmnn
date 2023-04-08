export interface SmsBody {
    hash: string
    mensagem: string
    acao: string
    numero: Array<string>
}