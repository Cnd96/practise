#include "bits/stdc++.h"
#include <iostream> 
#include <vector> 
#include <string> 
using namespace std;

bool sortcol( const vector<int>& v1, 
               const vector<int>& v2 ) { 
 return v1[1] > v2[1]; 
} 
int main()
{
    int t;
    cin>>t;
    for (int i = 1; i <=t; i++)
    {
        string s="";
        int n,p;
        cin>>n;
        int totalMembers=0;
        int evacuatedMembers=0;
        vector<vector<int> > pdata(n); 
        for(int j=0;j<n;j++){
            cin>>p;
            pdata[j] = vector<int>(2); 
            pdata[j][0]=j;
            pdata[j][1]=p;
            totalMembers+=p;
        }

        while (totalMembers>evacuatedMembers)
        {
            sort(pdata.begin(), pdata.end(),sortcol);
            if(pdata[0][1]!=1){
                if(pdata[0][1]==pdata[1][1]){
                    char c=pdata[0][0]+65;
                    char c2=pdata[1][0]+65;
                    s.push_back(c);
                    s.push_back(c2);
                    s.push_back(' ');
                    evacuatedMembers+=2;
                    pdata[0][1]--;
                    pdata[1][1]--;
                }
                else
                {
                    char c=pdata[0][0]+65;
                    s.push_back(c);
                    s.push_back(' ');
                    evacuatedMembers++;
                    pdata[0][1]--;
                } 
            }
            else
            { 
                for (int k= 0; k < n-2; k++) { 
                     char c=pdata[k][0]+65;
                     s.push_back(c);
                     s.push_back(' ');
                     evacuatedMembers++;
                     pdata[k][1]--;
                }
                char c=pdata[n-2][0]+65;
                char c2=pdata[n-1][0]+65;
                s.push_back(c);
                s.push_back(c2);
                evacuatedMembers+=2;
                pdata[n-2][1]--;
                pdata[n-1][1]--;
            }    
        }
        cout<<"Case #"<<i<<": "<<s<<endl;
   
    }    
}
