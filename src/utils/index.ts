export function formatCurrency(quantity: number) {
    return new Intl.NumberFormat('en-us', {
        style: "currency",
        currency: "MXN"
    }).format(quantity)
}

export function formatDate(isoString: string){
    const date = new Date(isoString)
    const formatter = new Intl.DateTimeFormat('es-Es',{
        year: 'numeric',
        month: '2-digit',
        day:'2-digit'
    })

    return formatter.format(date)
}