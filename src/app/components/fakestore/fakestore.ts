import { Component, inject, OnInit } from '@angular/core';
import { SFakeStore } from '../../services/sfake-store';
import { IFakestore } from '../../interfaces/ifakestore';

@Component({
  selector: 'app-fakestore',
  imports: [],
  templateUrl: './fakestore.html',
  styleUrl: './fakestore.css'
})
export class Fakestore implements OnInit {

  FakeStoreList:IFakestore[]=[]
private readonly fakeStore=inject(SFakeStore)
ngOnInit(): void {
    this.fakeStore.getDataStore().subscribe({
      next:(res)=>{
this.FakeStoreList=res
      },
      error:(err)=>{
        console.log(err)
      }
    })
}
}
