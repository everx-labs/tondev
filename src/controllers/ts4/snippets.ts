export const BasicTest = `"""
    This file was generated by TONDev.
    TONDev is a part of TON OS (see http://ton.dev).
"""
from tonos_ts4 import ts4


def test():
    # Place your code of the test here
    print('Ok')

    
if __name__ == '__main__':
    # Initialize TS4 by specifying where the artifacts of the used contracts are located
    # verbose: toggle to print additional execution info
    ts4.init('contracts/', verbose = True)

    test()

`;