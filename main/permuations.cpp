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
        vector<long long> sumData;
        int n, tempSize;
        long long num;
        cin >> n;
        for (int j = 0; j < n; j++)
        {
            cin >> num;
            tempSize = sumData.size();
            for (int k = 0; k < tempSize; k++)
            {
                sumData.push_back((num + sumData[k]));
            }
            sumData.push_back(num);
        }
        // for (int k = 0; k < sumData.size(); k++)
        // {
        //    cout<<sumData[k]<<endl;
        // }
        cout<<"ss "<<sumData.size();
    }
    return 0;
}
