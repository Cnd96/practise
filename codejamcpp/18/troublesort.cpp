#include "bits/stdc++.h"
#include <iostream> 
#include <vector> 
#include <string> 
using namespace std;

int main()
{
    // int a=5;
    // cout<<(a/2)+(a%2)<<" "<<a/2;
    int t;
    cin>>t;

    for (int i = 1; i <=t; i++)
    {
        int n;
        cin>>n;
        int mainArr[n];
        vector<int>  evenArr;
        vector<int>  oddArr;
        for (int j = 0; j <n; j++){
            int number;
            cin>>number;
            if(j%2==0){
                evenArr.push_back(number);
            }
            else
            {
                oddArr.push_back(number);
            }
        }
        sort(evenArr.begin(), evenArr.end());
        sort(oddArr.begin(), oddArr.end());
        if(n%2==1){
            
        }
        bool ok=true;
        for(int j =0;j<(n/2);j++){
            if(evenArr[j]>oddArr[j]){
                ok=false;
                break;
            }
            else if(oddArr[j]>evenArr[j+1])
            {
                /* code */
            }
            
            cout<<oddArr[j]<<endl;
        }
        
    }    
}
