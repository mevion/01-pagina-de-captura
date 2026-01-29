from fastapi import APIRouter
from app.schemas.lead import LeadCreate

router = APIRouter(
    prefix="/leads",
    tags=["Leads"]
)

@router.post("")
def create_lead(lead: LeadCreate):
    return {
        "message": "Lead recebido com sucesso",
        "data": lead
    }
