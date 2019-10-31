'''Test of function validate of TicTacToe class'''
import unittest
import tictactoe
class TestTicTacToeValidator(unittest.TestCase):

    '''Test of function validate of TicTacToe class'''
    def test_validate(self):

        '''Test of function validate of TicTacToe class'''
        ttt = tictactoe.TicTacToe()
        self.assertEqual(ttt.validate('0'), True)
        ttt.set_x(0)
        self.assertEqual(ttt.validate('1'), True)
        ttt.set_x(1)
        self.assertEqual(ttt.validate('2'), True)
        ttt.set_x(2)
        self.assertEqual(ttt.validate('3'), True)
        ttt.set_x(3)
        self.assertEqual(ttt.validate('4'), True)
        ttt.set_x(4)
        self.assertEqual(ttt.validate('5'), True)
        ttt.set_x(5)
        self.assertEqual(ttt.validate('6'), True)
        ttt.set_x(6)
        self.assertEqual(ttt.validate('7'), True)
        ttt.set_x(7)
        self.assertEqual(ttt.validate('8'), True)
        ttt.set_x(8)

        self.assertEqual(ttt.validate("a"), False)
        self.assertEqual(ttt.validate("abc"), False)
        self.assertEqual(ttt.validate('9'), False)

        self.assertEqual(ttt.validate('0'), False)
        self.assertEqual(ttt.validate('1'), False)
        self.assertEqual(ttt.validate('2'), False)
        self.assertEqual(ttt.validate('3'), False)
        self.assertEqual(ttt.validate('4'), False)
        self.assertEqual(ttt.validate('5'), False)
        self.assertEqual(ttt.validate('6'), False)
        self.assertEqual(ttt.validate('7'), False)
        self.assertEqual(ttt.validate('8'), False)

if __name__ == "__main__":
    unittest.main()
