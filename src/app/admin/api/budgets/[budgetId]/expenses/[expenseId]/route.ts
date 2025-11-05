// src\app\admin\api\budgets\[budgetId]\expenses\[expenseId]\route.ts

import { verifySession } from "@/src/auth/dal"
import { fetchWithAuth } from "@/src/lib/api"

export async function GET(request: Request, { params }: { params: { budgetId: string, expenseId: string } }) {
    
    // SOLUCIÓN: Usar await para desestructurar los params
    const { budgetId, expenseId } = await params; // <--- ¡AQUÍ ESTÁ EL CAMBIO CLAVE!

    await verifySession()
    
    // Ahora usamos las variables desestructuradas
    const url = `/budgets/${budgetId}/expenses/${expenseId}`
    const req = await fetchWithAuth(url)
    const json = await req.json()
    
    if(!req.ok){
        return Response.json(json.error, {status: 403})
    }

    return Response.json(json)
}