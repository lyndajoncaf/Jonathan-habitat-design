[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
                                                                                                                                                                                                                                                                                                                                                                                              lide incrementing the index
    index++;
    
    // If you go over all slides, restart the index to show the first slide and start again
    if (index === slides.length) index = 0; 
    
    slides[index].classList.add('active');

  }, time);
}