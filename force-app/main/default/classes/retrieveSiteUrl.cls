public class retrieveSiteUrl {
    @InvocableMethod
    public static List<String> getUrl (List<String> siteNames) {
        List<String> results = new List<String>();

        for (String rawSiteName : siteNames) {
            String siteName = rawSiteName.replace(' ', '_') + '1';
            String siteId = [SELECT Id FROM Site WHERE Name = :siteName].Id;
            String url = [SELECT SecureUrl FROM SiteDetail WHERE DurableId = :siteId].SecureUrl;

        	results.add(url);
        }
        
        return results;
    }
}