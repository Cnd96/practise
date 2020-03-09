#include "bits/stdc++.h"
#include <iostream>
#include <vector>
#include <string>
using namespace std;

bool sortcol(const vector<int> &v1,
             const vector<int> &v2)
{
    return v1[1] > v2[1];
}
int main()
{
    string str = "asddddas";
    // Deletes 4 characters from index number 1
    str.erase(1, 4);
    //array sort
    int od[5];
    sort(od, od + 5, greater<int>());
    //string loop
    string s;
    for (int j = 0; j < s.size(); j++)
    {
    }
    //swap string
    string kk = "123456";
    swap(kk[1], kk[4]);
    // break from for loop
    for (int j = kk.size() - 1; j >= 0; j--)
    {
        cout << kk[j];
        if (kk[j] == '3')
        {
            break;
        }
    }

    //loop through vector
    vector<int> evenArr;
    for (auto j = evenArr.cbegin(); j != evenArr.cend(); ++j)
    {
        cout << *j << endl;
    }

    //vector remove element by value
    vector<int> vec{10, 20, 30, 30, 20, 10, 10, 20};
    vec.erase(vec.begin() + 1);


    //vector sort
    vector<int> d;
    sort(d.begin(), d.end(), greater<int>());
    // Multi D vector and sort by column
    vector<vector<long long>> pdata(5);
    for (int j = 0; j < 5; j++)
    {
        pdata[j] = vector<long long>(2);
        pdata[j][0] = j;
        pdata[j][1] = 2;
    }
    sort(pdata.begin(), pdata.end(), sortcol);

    //find an element in vector
    vector<int> vec{10, 20, 30, 40};
    auto a = find(vec.begin(), vec.end(), 12);
    cout << a - vec.begin(); //a==vec.end() if doesnot find a match
}
