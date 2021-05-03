---
layout: article
title: "Crystal clear?"
categories: crystal, development
---

So today I am going to go over installing [Crystal][crystalurl]{:target="_blank"}. I will be working on a MacBook for this, but its pretty similar to most other systems.

<div class="image-center">
  <svg width="286px" height="70px" viewBox="0 0 286 70" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(-27.000000, -34.000000)" fill="#000000" fill-rule="nonzero">
        <path d="M138.5,88.9 L139.1,93.6 C136.3,94.5 132.8,94.9 128.5,94.9 C123.3,94.9 119.7,93.6 117.6,90.9 C115.5,88.2 114.4,83.6 114.4,77.1 C114.4,70.6 115.4,65.9 117.6,63.3 C119.7,60.6 123.3,59.3 128.5,59.3 C132.3,59.3 135.6,59.7 138.4,60.4 L137.8,65.2 C134.9,65 131.8,64.9 128.5,64.9 C125.6,64.9 123.7,65.8 122.6,67.5 C121.6,69.3 121,72.5 121,77.2 C121,81.9 121.5,85.2 122.6,86.9 C123.7,88.7 125.6,89.5 128.5,89.5 C132.7,89.4 136.1,89.2 138.5,88.9 Z M167.2,83.5 L170.3,94.3 L163.6,94.3 L160.8,83.6 C160.2,81.5 158.8,80.5 156.8,80.5 L150.6,80.5 L150.6,94.3 L144.4,94.3 L144.4,59.8 C147.4,59.5 151.6,59.4 157,59.4 C161.4,59.4 164.5,60.1 166.3,61.6 C168.1,63.1 169,65.7 169,69.5 C169,72.2 168.5,74.2 167.5,75.6 C166.5,77 164.8,77.9 162.5,78.2 L162.5,78.5 C163.5,78.7 164.4,79.3 165.3,80.1 C166.3,80.8 166.9,82 167.2,83.5 Z M161.5,74.1 C162.3,73.3 162.7,71.9 162.7,69.8 C162.7,67.7 162.3,66.3 161.5,65.5 C160.7,64.8 159.2,64.4 156.9,64.4 L150.7,64.4 L150.7,75.3 L156.9,75.3 C159.2,75.3 160.7,74.9 161.5,74.1 Z M257.7,59.8 L230.2,59.8 L230.2,65.1 L240.7,65.1 L240.7,94.3 L247,94.3 L247,65.1 L257.7,65.1 L257.7,59.8 Z M277.1,61.4 L287.5,94.2 L281,94.2 L278.2,84.4 L265.4,84.4 L262.6,94.2 L256.2,94.2 L266.5,61.4 C266.8,60.3 267.6,59.7 268.8,59.7 L274.9,59.7 C276,59.8 276.8,60.3 277.1,61.4 Z M276.7,79.4 L273.2,67.5 C272.7,65.7 272.5,64.7 272.4,64.6 L271.1,64.6 L270.3,67.5 L266.9,79.4 L276.7,79.4 Z M312.6,89.1 L300.6,89.1 C299.5,89.1 298.7,88.9 298.3,88.5 C297.9,88.1 297.6,87.3 297.6,86.3 L297.6,59.8 L291.3,59.8 L291.3,87.2 C291.3,92 293.9,94.4 299.1,94.4 C305,94.4 309.5,94.2 312.8,94 L312.6,89.1 Z M187.8,73.2 C187.6,73.7 187.1,75.1 186.4,77.4 L186,77.4 C185.3,75.2 184.8,73.8 184.6,73.2 L178.3,59.8 L171.7,59.8 L183,82.6 L183,94.4 L189.3,94.4 L189.3,82.6 L200.6,59.8 L194.1,59.8 L187.8,73.2 Z M219.8,75.2 L213.2,73.1 C211.7,72.6 210.7,72.1 210.2,71.5 C209.6,70.9 209.4,69.9 209.4,68.5 C209.4,66.8 209.8,65.7 210.6,65.2 C211.4,64.8 212.9,64.5 215.2,64.5 C218.2,64.5 221.7,64.6 225.5,64.7 L225.9,60.3 C222.9,59.5 219.3,59.1 215.1,59.1 C210.7,59.1 207.6,59.7 205.9,60.9 C204.1,62.1 203.3,64.6 203.3,68.4 C203.3,71 203.8,73.2 204.9,74.8 C206,76.4 207.7,77.6 210.2,78.4 L217.2,80.6 C218.6,81 219.6,81.5 220.1,82.1 C220.6,82.7 220.9,83.7 220.9,85.2 C220.9,86.9 220.5,88.1 219.8,88.6 C219,89.1 217.5,89.4 215.2,89.4 C213.7,89.4 210.1,89.3 204.3,89.2 L203.9,93.8 C207.6,94.5 211.3,94.9 215.1,94.9 C219.7,94.9 222.9,94.2 224.6,92.9 C226.4,91.6 227.3,89 227.3,85.2 C227.3,82.6 226.8,80.4 225.7,78.8 C224.3,77.2 222.5,76 219.8,75.2 Z M96.4,78 L87.3,44 C87.3,43.9 87.2,43.8 87,43.7 L52.9,34.6 C52.8,34.6 52.6,34.6 52.5,34.7 L27.5,59.6 C27.4,59.7 27.4,59.8 27.4,60 L36.5,94 C36.5,94.1 36.6,94.2 36.8,94.3 L70.9,103.4 C71,103.4 71.2,103.4 71.3,103.3 L96.3,78.4 C96.4,78.2 96.5,78.1 96.4,78 Z M63,51.3 L54,84.7 C54,84.8 53.9,84.8 53.8,84.7 L29.4,60.3 C29.3,60.2 29.4,60.2 29.4,60.1 L62.9,51.1 C62.9,51.2 63,51.2 63,51.3 Z" ></path>
      </g>
    </g>
  </svg>
</div>

## Homebrew
First off we need to make sure we install [Homebrew](http://brew.sh/){:target="_blank"} it very simple to install. Be aware during install you may be asked you to install Xcode Command Line Tools, if so just say yes.

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

---

## Cystal

With Homebrew installed we can now move on to installing [Crystal][crystalurl]{:target="_blank"}, the current version at time of writing this is (1.0.0). You will need to enter the following commands into your terminal window.

```
# Install Crystal.
brew install crystal

# Check our Crystal version.
crystal -v
```

When we want to update [Crystal][crystalurl]{:target="_blank"} to a new version, you would simply update brew first, then update Crystal.

```
# Update Homebrew.
brew update

# Update Crystal.
brew upgrade crystal
```

---

## Crystal options
If you run `crystal` with no arguments, you can get a list of all available options for the compiler.

```
crystal
Usage: crystal [command] [switches] [program file] [--] [arguments]

Command:
    init                     generate a new project
    build                    build an executable
    docs                     generate documentation
    env                      print Crystal environment information
    eval                     eval code from args or standard input
    play                     starts Crystal playground server
    run (default)            build and run program
    spec                     build and run specs (in spec directory)
    tool                     run a tool
    help, --help, -h         show this help
    version, --version, -v   show version

Run a command followed by --help to see command specific information, ex:
    crystal <command> --help
```

---

Well that's a rather quick intro into getting Crystal setup, in my next posts I will go into setting up [Lucky][luckyurl]{:target="_blank"}, which is a Framework similar to Rails but with some really nice features.

[crystalurl]: https://crystal-lang.org
[luckyurl]: https://www.luckyframework.org
