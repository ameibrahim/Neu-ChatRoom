<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Doctor Dashboard</title>
        <link rel="stylesheet" href="css/index.css">
        <link rel="stylesheet" href="css/dashboard.css">
        <link rel="stylesheet" href="css/popup.css">
        <link rel="stylesheet" href="css/doctor.css">
        <link rel="stylesheet" href="css/fetch.css">
        <link rel="stylesheet" href="css/report.css">
        <link rel="stylesheet" href="css/spinkit.css">
        <link rel="stylesheet" href="css/stickylabels.css">

        <?php 
            echo "<script> 
            const DOCTOR_NAME = '".$_SESSION['doctor-fullname']."';
            const DOCTOR_EMAIL = '".$_SESSION['doctor-email']."';
            const DOCTOR_ID = '".$_SESSION['doctor-id']."';
            </script>"; 
        ?>
        
        <script type="importmap">
            {
                "imports": {
                "ReportTemplates": "js/ReportTemplates.js",
                "UtilFunctions" : "js/UtilFunctions.js",
                "PostFunctions" : "js/PostFunctions.js",
                "ReportFunctions" : "js/ReportFunctions.js",
                "BlockchainContract" : "contracts/contract.connect.js"
                }
            }
        </script>
        <script src="js/index.js" defer></script>
        <script src="js/doctor.js" type="module"></script>
        <script src="js/web3/dist/web3.min.js"></script>
        <script src="js/interact.web3.js" type="module"></script>
        <script src="https://cdn.jsdelivr.net/npm/pdfjs-dist@3.5.141/build/pdf.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    </head>
<body>

    <h1 class="main-heading green-font">Reports on Blockchain</h1>

    <nav class="dashboard-menu select-none">
        <div class="menu-container">            
            <div class="username green-bg" onclick="dropdown()">Doctor <?php echo $_SESSION['doctor-fullname']; ?></div>
            <a class="logout green-border green-font" href="logout.php">logout</a>
        </div>
    </nav>

    <div class="wrapper-container">
        <section>
            <div class="local-report-list select-none"></div>
        </section>

        <section class="doctor-brc">
            <div class="blockchain-report-container select-none">
                <div class="initial-loader">
                    <div class="sk-bounce">
                        <div class="sk-bounce-dot"></div>
                        <div class="sk-bounce-dot"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <?php include 'components/overlays/view-report-link-overlay.php'; ?>
    <?php include 'components/overlays/create-new-report-overlay.php'; ?>
    <?php include 'components/overlays/report-review-overlay.php'; ?>
</body>
</html>