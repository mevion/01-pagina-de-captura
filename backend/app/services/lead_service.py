from app.schemas.lead import LeadCreate


def create_lead(lead: LeadCreate):
    """
    Regra de negócio para criação de lead.
    Hoje: apenas retorna os dados.
    Amanhã: salvar no banco, enviar para outro sistema, etc.
    """
    return {
        "message": "Lead recebido com sucesso",
        "data": lead
    }
