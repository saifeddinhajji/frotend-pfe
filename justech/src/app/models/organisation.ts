import {Formation} from './Formation';
import {SocialMedia} from './SOcialMedia';
let formation:Formation;
let Media:SocialMedia;
export class Organisation {
    _id: string;
    name: string;
    description: string;
    type: string;
    domaine: string;
    email: string;
    tel1:string;
    tel2:string;
    fax:string;
    logo:string;
    pays:string;
    ville:string;
    abreviation:string;
    updated_at:Date;
    created_at:Date;
    formations:Formation[];
    socialmedia:[];
    constructor(obj?: any) {
        this._id=obj._id;
        this.name=obj.name;
        this.description=obj.description;
        this.type=obj.type;
        this.email=obj.domaine;
        this.tel1=obj.tel1;
        this.tel2=obj.tel2;
        this.logo=obj.logo;
        this.fax=obj.fax;
        this.ville=obj.ville;
        this.pays=obj.pays;
        this.abreviation=obj.abreviation;
        this.updated_at=obj.updated_at;
        this.created_at=obj.created_at;
        this.formations=new Array();
        obj.formations.map(res=>{
        formation=new Formation(res);
        this.formations.push(formation)

       })
      
       this.socialmedia= obj.SocialMedia_id;
           
      
      
           
       
      
             


    }
 
}

