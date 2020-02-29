#include "bits/stdc++.h"
#include <iostream> 
#include <vector> 
#include <string> 
using namespace std;

int main()
{
   //string loop
    string s;
    for(int j=0 ; j<s.size();j++){
                
    }
    //swap string 
    string kk="123456";
    swap(kk[1], kk[4]);
    // break from for loop
    for(int j=kk.size()-1 ; j>=0;j--){
          cout<<kk[j];      
          if(kk[j]=='3'){
              break;
          }
    }

    //loop through vector
    vector<int> evenArr;
    for (auto j = evenArr.cbegin(); j != evenArr.cend(); ++j){
            cout<<*j<<endl;
    }

}


