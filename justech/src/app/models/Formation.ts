export class Formation{
    _id: string;
    titre: string;
    description: string;
    modele_certificat: string;
    formateur: string;
    date_depart: Date;
    date_fin: Date;
    affiche: Date;
    pays: Date;
    ville: Date;
    organisateur: string;
    organisation: string;
    created_at: Date;
    updated_at: Date;
    constructor(formation: any) {
        this._id=formation._id;
        this.titre=formation.titre;
        this.description=formation.description;
        this.modele_certificat=formation.modele_certificat;
        this.formateur=formation.formateur;
        this.date_depart=formation.date_depart;
        this.date_fin=formation.date_fin;
        this.affiche=formation.affiche;
        this.pays=formation.pays;
        this.ville=formation.ville;
        this.organisateur=formation.organisateur;
        this.organisation=formation.organisation;
        this.updated_at=formation.createdAt;
        this.created_at=formation.updatedAt;
        
    }
}