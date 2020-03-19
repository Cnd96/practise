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
        int n, p, q;
        string s;
        cin >> n >> p >> q;
        int kk[n];
        int aa[n];
        int ss[n];
        char bb[n];
        long long frostPK = 0;
        long long frostPA = 0;
        long long dustPK = 0;
        long long dustPA = 0;

        for (int j = 0; j < n; j++)
        {
            cin >> kk[j];
        }
        for (int j = 0; j < n; j++)
        {
            cin >> aa[j];
        }
        for (int j = 0; j < n; j++)
        {
            cin >> ss[j];
        }
        cin >> s;
        for (int j = 0; j < n; j++)
        {
            bb[j]=s[j];
        }

        for (int j = 0; j < n; j++)
        {
            if (bb[j]=='0')
            {
                if ((kk[j] + aa[j]) == ss[j])
                {
                    frostPA += aa[j];
                    frostPK += kk[j];
                }
            }
            else
            {   
                if ((kk[j] + aa[j]) == ss[j])
                {
                    dustPA += aa[j];
                    dustPK += kk[j];
                }
            }
        }

        long long ff=(p*frostPK)+(q*frostPA);
        long long dd=(p*dustPK)+(q*dustPA);
        // cout<<ff<<" "<<dd<<endl;
        if(ff>dd){
            cout<<"Frost"<<endl;
        }
        else
        {
            cout<<"DustinKiller"<<endl;
        }
    }
    return 0;
}
