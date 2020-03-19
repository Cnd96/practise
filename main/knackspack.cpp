#include "bits/stdc++.h"
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int knackPack(int weights[], int values[], int capacity, int noItems)
{
    int packData[noItems + 1][capacity + 1];

    for (int i = 0; i <= capacity; i++)
    {
        packData[0][i] = 0;
    }
    for (int i = 0; i <= noItems; i++)
    {
        packData[i][0] = 0;
    }

    for (int i = 0; i < noItems; i++)
    {
        for (int j = 1; j <= capacity; j++)
        {
            if (weights[i] > j)
            {
                packData[i + 1][j] = packData[i][j];
            }
            else
            {
                int x = max(packData[i][j], (values[i] + packData[i][j - weights[i]]));
                packData[i + 1][j] = x;
            }
        }
    }
    return packData[noItems][capacity];
}

int main()
{
    int capacity = 10;
    int items = 4;
    int weights[4] = {5, 4, 6, 3};
    int values[4] = {10, 40, 30, 50};

    int val[] = {60, 100, 120}; 
    int wt[] = {10, 20, 30}; 
    int  W = 50; 
    int vv = knackPack(wt, val, W, 3);
    // int vv = knackPack(weights, values, capacity, items);
    cout << vv;

    return 0;
}

//array copy
void knackPack1(int weights[], int values[], int capacity)
{
    int A[4];
    memcpy(A, weights, 4 * sizeof(int));

    for (int i = 0; i < 4; i++)
    {
        A[i]++;
    }
    // for (int i = 0; i < 4; i++)
    // {
    //     weights[i]++;
    // }
}