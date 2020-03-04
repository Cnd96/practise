#include "bits/stdc++.h"
#include <iostream> 
#include <vector> 
#include <string> 
using namespace std;

bool sortcol( const vector<long long>& v1, 
               const vector<long long>& v2 ) { 
 return v1[1] < v2[1]; 
} 

int main()
{
    int t;
    cin>>t;
    for (int i = 1; i <=t; i++)
    {
       int n,q,dif,one,two;
       int mCount=0;
       string originalS;
       string subS;
       cin>>n>>q>>originalS;
      //  vector<vector<int> > data(q); 
        
       for (int j = 0; j<q; j++){
        //  data[j] = vector<int>(2);
        
         cin>>one>>two;
         dif=two-(one-1);
        //  cout<<dif<<endl;
         if(dif==1){
           mCount++;
         }
         else if(dif%2==0)
         {
           bool isAble=true;
           subS=originalS.substr(one-1,dif);
           sort(subS.begin(), subS.end()); 
           while(subS.length()>0){
             char matchingChar=subS[0];
             int tempMatch=1;
             subS.erase(0,1);
             while(subS[0]==matchingChar){
               tempMatch++;
               subS.erase(0,1);
             }
             if(tempMatch%2==1){
               isAble=false;
               break;
             }
             cout<<matchingChar<<endl;
           }
           mCount+=isAble;
         }
         else
         {
           bool isAble=true;
           bool odd=false;
           subS=originalS.substr(one-1,dif);
           sort(subS.begin(), subS.end()); 
           while(subS.length()>0){
             char matchingChar=subS[0];
             int tempMatch=1;
             subS.erase(0,1);
             while(subS[0]==matchingChar){
               tempMatch++;
               subS.erase(0,1);
             }
             if(tempMatch%2==1){
               if(odd){
                 isAble=false;
                 break;
               }
               odd=true;
             }
           }
           mCount+=isAble;
         }
       }
 
      cout<<"Case #"<<i<<": "<<mCount<<endl;
    }  
    return 0;  
}
