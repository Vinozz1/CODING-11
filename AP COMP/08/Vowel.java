import java.util.Scanner;

public class Vowel {

    public static void main(String[] args)
    {
        Scanner console = new Scanner(System.in);
        System.out.print("Enter a char: ");
        String aChar = console.next();

        System.out.println(isVowel(aChar));
        System.out.println(isVowel("z"));
        System.out.println(notVowel("a"));
    }


    public static boolean isVowel(String s) {
        return s.equals("a") || s.equals("e") ||
               s.equals("i") || s.equals("o") ||
               s.equals("u");
        // return false;
    }

    public static boolean isVowel(String s) {
        return s.length() == 1 && "aeiou".indexOf(s) != -1;
    }

    public static boolean notVowel(String s) {
        return !isVowel(s);
    }
}
