#include "bits/stdc++.h"
#include <iostream>
#include <vector>
#include <string>
using namespace std;
int main()
{

    int t;
    cin >> t;
    for (int i = 1; i <= t; i++)
    {
        int r, c;
        cin >> r;
        int sData[r];
        long long sum[r-2]={0};
        for (int j = 0; j < r; j++)
        {
            cin>>sData[j];
            if(j<3){
                sum[0]+=sData[j];
            }
            else
            {
                sum[j-2]=sData[j] +sum[j-3]-sData[j-3]; 
            }
        }
        sort(sum,sum+(r-2));
        long long set1=sData[0]+sData[1]+sData[r-1];
        long long set2=sData[0]+sData[r-2]+sData[r-1];

        long long res=max(set1,set2);
        res=max(res,sum[r-3]);
        cout<<res<<endl;
    }
    return 0;
}
