import React from "react";
import {
  Paper,
  Typography,
  Grid,
  ListItem,
  List,
  ListItemText
} from "@material-ui/core";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
const Help = () => {
  return (
    <Paper className="paperCenter" elevation={1}>
      <Typography align="center" variant="h4" component="h1">
        How to use Materials Share
      </Typography>
      <br />
      <br />
      <Grid container spacing={8}>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" component="h3">
            Index
          </Typography>

          <List component="nav">
            <ListItemLink href="#quickstart">
              <ListItemText primary="Quick Start" />
            </ListItemLink>
            <ListItemLink href="#menubar">
              <ListItemText primary="Menu bar" />
            </ListItemLink>
            <ListItemLink href="#materials">
              <ListItemText primary="Materials" />
            </ListItemLink>
            <ListItemLink href="#viewmaterial">
              <ListItemText primary="View a Material" />
            </ListItemLink>
            <ListItemLink href="#search">
              <ListItemText primary="Search" />
            </ListItemLink>
            <ListItemLink href="#filter">
              <ListItemText primary="Filter" />
            </ListItemLink>
            <ListItemLink href="#register">
              <ListItemText primary="Register" />
            </ListItemLink>
            <ListItemLink href="#login">
              <ListItemText primary="Login/Logout" />
            </ListItemLink>
            <ListItemLink href="#privatepublic">
              <ListItemText primary="Private Public Materials" />
            </ListItemLink>
            <ListItemLink href="#ratematerial">
              <ListItemText primary="Rate Material" />
            </ListItemLink>
            <ListItemLink href="#savematerial">
              <ListItemText primary="Save Material" />
            </ListItemLink>
            <ListItemLink href="#downloadmaterial">
              <ListItemText primary="Download Material" />
            </ListItemLink>
            <ListItemLink href="#mymaterials">
              <ListItemText primary="My Materials" />
            </ListItemLink>
            <ListItemLink href="#creatematerial">
              <ListItemText primary="Create Material" />
            </ListItemLink>
            <ListItemLink href="#editmaterial">
              <ListItemText primary="Edit Material" />
            </ListItemLink>
            <ListItemLink href="#printmaterial">
              <ListItemText primary="Print Material" />
            </ListItemLink>
          </List>
        </Grid>

        <Grid item xs={12} md={9}>
          <Typography variant="h5" component="h3" href="#" id="quickstart">
            Quick Start
          </Typography>

          <Typography variant="body1">
            The first thing to do to have full access to the site is{" "}
            <a href="#register">Register</a>.
          </Typography>

          <Typography variant="body1">
            After registering and verifying your email address you should be
            logged in, if not <a href="#login">Login</a>.
          </Typography>

          <Typography variant="body1">
            Now you can browse <a href="#materials">Materials</a>,{" "}
            <a href="#downloadmaterial">Download Materials</a>,
            <a href="#ratematerial">Rate Materials</a> and{" "}
            <a href="#savematerial">Save Materials</a>
          </Typography>

          <Typography variant="body1">
            If you want to find materials quickly you can{" "}
            <a href="#search">Search</a> or <a href="#filter">Filter</a>
          </Typography>

          <Typography variant="body1">
            Remember to click on the title or image of the material you are
            interested in to get a detailed view -{" "}
            <a href="#viewmaterial">View a Material</a>{" "}
          </Typography>
          <Typography variant="body1">
            You can also <a href="#creatematerial">Create Materials</a> and{" "}
            <a href="#editmaterial">Edit your Materials</a>
          </Typography>

          <Typography variant="body1">
            This should get you going. If you want more details check the index
            above
          </Typography>
          <hr />
          <Typography variant="h5" component="h3" href="#" id="menubar">
            Menu bar
          </Typography>

          <Typography variant="body1">
            The menu bar is located at the top of the screen. It looks different
            on mobile and is not visible to begin with. On mobile you have to
            hit the icon in the top right hand corner with three bars on it to
            open the menu. See the pictures for both desktop and mobile menu
            bars.
          </Typography>

          <Typography variant="body1">
            The menu is like a navigation panel. It allows you to see different
            areas of Materials Share. You are now in the Start Here area. Have a
            look at the other areas you can visit. We will take a look at each
            in more detail further down the page.
          </Typography>

          <Typography variant="body1">
            Click or tap on any menu item to go to that page.
          </Typography>

          <hr />

          <Typography variant="h5" component="h3" href="#" id="materials">
            Materials
          </Typography>

          <Typography variant="body1">
            The materials page is where you view all materials created and
            currently shared
          </Typography>

          <Typography variant="body1">
            The materials page gives you brief information about each material,
            such as: title, objective, level, the textbook it can be used with
            and a picture of files associated with the material. You can click
            on any material to get the full details.{" "}
          </Typography>

          <hr />

          <Typography variant="h5" component="h3" href="#" id="viewmaterial">
            View a Material
          </Typography>

          <Typography variant="body1">
            By clicking Materials button on the menu bar you will get a list of
            all the materials currently available on the site. If you want more
            detail on a particular material click on its title. This will bring
            you into the material's page. From here you have many options.
          </Typography>

          <Typography variant="body1">
            If you are not logged in you can browse the material.
          </Typography>

          <Typography variant="body1">If you are logged in:</Typography>

          <Typography variant="body1">
            If you own the material you can edit or delete the material by
            clicking the appropriate button. You can also make the material
            public or private.{" "}
          </Typography>

          <Typography variant="body1">
            If you are not the owner of the material you can save the material
            in your My Materials page by clicking the save button. You can
            download the files the accompany the material. You can also rate and
            leave comments about the material.
          </Typography>

          <hr />
          <Typography variant="h5" component="h3" href="#" id="search">
            Search
          </Typography>

          <Typography variant="body1">
            As the collection of materials increases it will become more
            difficult to just browse to files you are interested in. A search
            function has been implemented on the site to aid in finding a
            material specifc to you needs. Just key in a word such as "family"
            and Materials Share will search it's database for materials
            containing the key word.{" "}
          </Typography>

          <Typography variant="body1">
            Search is located on the menu bar. Just type a relevant word and hit
            enter. All the materials pertinent to the search query will be
            displayed.
          </Typography>

          <hr />
          <Typography variant="h5" component="h3" href="#" id="filter">
            Filter
          </Typography>

          <Typography variant="body1">
            Filer is similar to search in that it reduces the number of
            materials into something more meaningful. However, filter reduces by
            a number of factors at once. Say you want a material for "Level 2",
            which lasts "10" minutes and involves "speaking", then you can set
            these filters and only find materials with these attributes.
          </Typography>

          <Typography variant="body1">
            The filter button is located at the top on the materials page. Click
            it to see the filter criteria. Choose your criteria and hit the
            "start filter" button to see your selection.
          </Typography>

          <hr />
          <Typography variant="h5" component="h3" href="#" id="register">
            Register
          </Typography>

          <Typography variant="body1">
            Registering is free and gives you many benefits. Registered users
            can: upload, edit and download materials; save new materials to
            their "My materials" page and rate and comment on materials{" "}
          </Typography>

          <Typography variant="body1">
            Registering is easy. Click on Register on the menu bar. You will
            back teken to a form. Fill out all the details requested. Please use
            a strong password one with numbers letters and characters longer
            than 8 characters is a good password. Click the submit button. You
            should see a new page asking you to check the email address you have
            registered with. Please check for an email from Materials Share. The
            email should contain a link. Click on this link to activate your
            account. You should now see your "my Materials" page. You are now
            logged in.
          </Typography>

          <hr />
          <Typography variant="h5" component="h3" href="#" id="login">
            Login/Logout
          </Typography>

          <Typography variant="body1">
            To login or logout simply click on the appropriate button in the
            menu bar. Login will require that you are registered and the email
            address and password you chose when you registered. When you login
            you will be taken to your "My Materials" page.
          </Typography>

          <hr />
          <Typography variant="h5" component="h3" href="#" id="privatepublic">
            Shared Materials
          </Typography>

          <Typography variant="body1">
            All materials can be shared or not. Materials shared status can only
            be changed by their creator/owner. Making a material shared means it
            can be viewed, searched for, filtered and/or saved in the
            "Materials" page. If the material is made not shared only you, the
            creator of the material can see it in your "My materials" page. You
            may wish to make materials that are not complete not shared.
          </Typography>

          <hr />
          <Typography variant="h5" component="h3" href="#" id="ratematerial">
            Rate Material
          </Typography>

          <Typography variant="body1">
            If you are logged in you are able to give a rating of 0-5 (including
            half) hearts. To do so go the the detailed view of the material you
            want to rate (find material and click on its title). From here you
            can select as many hearts as you want for the material and then hit
            the "rate" button to register your opinion. You can change your mind
            and re-rate by using the same method at anytime but, you can only
            vote once. After your vote the hearts display the average value of
            the votes, not your vote.
          </Typography>

          <hr />
          <Typography variant="h5" component="h3" href="#" id="savematerial">
            Save Material
          </Typography>

          <Typography variant="body1">
            Materials can be saved to your "My Materials" page from the
            "Materials" page or from the detailed view of a material. If you are
            logged in simply click the "Save to my materials" button to save or
            "Remove from my materials" to remove. Once a material is saved you
            can easily find it again in your "My Materials" page.{" "}
          </Typography>

          <hr />
          <Typography
            variant="h5"
            component="h3"
            href="#"
            id="downloadmaterial"
          >
            Download Material
          </Typography>

          <Typography variant="body1">
            If you are logged in you may download materials. To do this go to
            the detailed view of a material (click on the title from "My
            Materials" or "Materials" pages). In the detailed view you will see
            a download button under the image of the attached files. Click this
            button to start the download. Please note this may take a while
            depending on your internet connection speed and the size of the
            file. Also not files downloaded are at original file size not
            reduced as you see on the preview.
          </Typography>

          <hr />
          <Typography variant="h5" component="h3" href="#" id="mymaterials">
            My Materials
          </Typography>

          <Typography variant="body1">
            My Materials is your home page. It is where all the materials you
            have created are stored. It can only be accessed by you the owner
            when you are logged in. Materials that are private can be worked on
            from here. Materials can be made public (or private) from here too.
            All your saved materials will also be here.
          </Typography>

          <hr />
          <Typography variant="h5" component="h3" href="#" id="creatematerial">
            Create Material
          </Typography>

          <Typography variant="body1">
            To create a material you must be logged in. Creating a material is a
            two stage process. The first stage is to chose the attributes your
            material requires. The second stage is to provide details about
            those attributes. Please note you can edit a material and add
            attributes to it or update it at anytime
          </Typography>

          <Typography variant="body1">
            Stage one: choosing attributes- To create a new materials hit the
            "New Material" button. A new screen will lead with a number of
            buttons. Each button represents a different attribute of your
            material. You may choose as many or a few attributes as you require.
            There is a "?" which will give you more information on each
            attribute if you require. Hover over the "?" (or tap on mobile) for
            extra information.
          </Typography>

          <Typography variant="body1">
            Perhaps if you are in a rush you may jut choose "files". You could
            take a quick picture with your phone and give the material a title
            and you would be done. Later you could edit the material and fill
            out more details. Or, as a conscientious uploader you may chose to
            complete all the fields in one sitting.{" "}
          </Typography>

          <Typography variant="body1">
            Stage two: complete the form - for each button you selected in stage
            one, one of a number of different input type tools will be
            displayed. Please try to complete these as best you can. You can
            always edit them later if you make mistakes. Once all the fields are
            complete press the continue button. If there are no errors in the
            form you will be taken to the "My Materials" page where you should
            see your recently created material.
          </Typography>

          <hr />

          <Typography variant="h5" component="h3" href="#" id="editmaterial">
            Edit Material
          </Typography>

          <Typography variant="body1">
            To edit a material you will need to be logged in. You will need to
            be in the detailed view of the material. You need to be the creator
            of the material. Click the "Edit" button to edit. This will take you
            to a menu similar to when you created the material.{" "}
          </Typography>

          <Typography variant="body1">
            There are two columns (one on mobile) The first column shows the
            current attributes of the material. To edit them click on the button
            to select the attribute to edit. The right hand column (below on
            mobile) represents available attributed you may want to add to your
            material. Click any attributes you wish to add. Note if you click
            again on the attribute it will deselect.{" "}
          </Typography>

          <Typography variant="body1">
            When you have chosen all the attributes you want to add or edit
            click the "continue" button at the bottom of the screen. This will
            take you to the form for making you edits. Once you have completed
            the form click continue to finish. You will be taken back to your
            "My Materials" page where you will see the edited material.
          </Typography>
          <hr />

          <Typography variant="h5" component="h3" href="#" id="printmaterial">
            Print Material
          </Typography>

          <Typography variant="body1">
            If you wish to print any material you can press the "CTRL" + "p" on
            your keyboard. This will open the print service of your browser
            where you will see a modified version of the material designed for
            print. Follow the instructions for printing. Please note with
            attached files it is highly recommended to download these files and
            then print off. Low quality images are used for fast load times on
            the website.{" "}
          </Typography>
        </Grid>
      </Grid>
      <hr />

      {/* <script>
        $(document).ready(function () {

//Check to see if the window is top if not then display button
            $(window).scroll(function () {
                if ($(this).scrollTop() > 400) {
                    $('.scrollToTop').fadeIn().css('z-index', 20000);

                } else {
                    $('.scrollToTop').fadeOut();
                }
            });

//Click event to scroll to top
            $('.scrollToTop').click(function () {
                $('html, body').animate({scrollTop: 0}, 800);
                return false;
            });

        });

    </script> */}
    </Paper>
  );
};

export default Help;
