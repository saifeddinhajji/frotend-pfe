export class SocialMedia {
    _id: string;
    facebook: string;
    linkedin: string;
    instagram: string;
    website:string;
    constructor(socialmedia:any){
        console.log(socialmedia)
        this._id=socialmedia._id;
        this.facebook=socialmedia.facebook;
        this.instagram=socialmedia.instagram;
        this.linkedin=socialmedia.linkedin;
        this.website=socialmedia.website;
    }
   /* constructor(id:string,face:string,link:string,insta:string,website:string){
        this._id=id;
        this.facebook=face;
        this.instagram=insta;
        this.linkedin=link;
        this.website=website;
    }*/
    
}