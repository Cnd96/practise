#include "bits/stdc++.h"
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main()
{
    int t;
    cin >> t;
    for (int tt = 1; tt <= t; tt++)
    {
      int a;
      cin>>a;
      int temp=0;
      int r=2;
      int c=2;
      int iR,iC,currenctRC,noC=7;
      int arr[a+1]={0};
      if(a==200)noC=67;

      while (1)
      {
         cout<<r<<" "<<c<<endl;
         cin>>iR>>iC;
         if((iR==0)&&(iC==0)){
             break;
         }
         currenctRC=((iR-1)*noC)+iC;
         if(arr[currenctRC]==0){
             temp++;
             arr[currenctRC]=1;
         }
         if(temp==9){
             c+=3;
             temp=0;
         }
      }
    }
    return 0;
}
