#include "bits/stdc++.h"
#include <iostream>
#include <vector>
#include <string>
using namespace std;
int main()
{

    // int a=6;
    // cout<<(6%1000000007);
    int t;
    cin >> t;
    for (int i = 1; i <= t; i++)
    {
        int N, c;
        int maxi=-1;
        cin >> N;
        for (int j = 0; j < N; j++)
        {
           
            cin>>c;
            maxi=max(maxi,c);
        }
        cout<<maxi<<endl;
    }
    return 0;
}
