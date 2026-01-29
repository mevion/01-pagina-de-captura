from pydantic import BaseModel
from typing import Optional

class LeadCreate(BaseModel):
    name: str
    email: str
    phone: str
    company: str
    segment: str
    revenue: str

    source: str
    campaign: Optional[str] = None
